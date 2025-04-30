import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BudgetCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BudgetCalculatorModal({
  isOpen,
  onClose,
}: BudgetCalculatorModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: "",
    area: "",
    name: "",
    phone: "",
  });
  const [budgetRange, setBudgetRange] = useState<{
    min: number;
    max: number;
  } | null>(null);
  const [errors, setErrors] = useState({
    area: "",
    phone: "",
  });
  const [showErrors, setShowErrors] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrgnrgly";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const validateArea = (value: string) => {
    if (!value) return "Area is required";
    if (isNaN(Number(value))) return "Please enter a valid number";
    if (Number(value) <= 0) return "Area must be greater than 0";
    return "";
  };

  const validatePhone = (value: string) => {
    if (!value) return "Phone number is required";
    if (!/^\d{10}$/.test(value))
      return "Please enter a valid 10-digit phone number";
    return "";
  };

  const calculateBudget = () => {
    const area = parseFloat(formData.area);
    if (formData.projectType === "residential") {
      setBudgetRange({
        min: Math.round(2500 * area),
        max: Math.round(3000 * area),
      });
    } else {
      setBudgetRange({
        min: Math.round(2200 * area),
        max: Math.round(6000 * area),
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowErrors(true);

    if (step === 1) {
      const areaError = validateArea(formData.area);
      setErrors({ ...errors, area: areaError });
      if (!areaError) {
        setStep(2);
        setShowErrors(false);
      }
    } else if (step === 2) {
      const phoneError = validatePhone(formData.phone);
      setErrors({ ...errors, phone: phoneError });
      if (!phoneError) {
        setIsSubmitting(true);
        try {
          calculateBudget();
          const response = await fetch(FORMSPREE_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              _subject: "New submission from budget calculator",
              projectType: formData.projectType,
              area: formData.area,
              name: formData.name,
              phone: formData.phone,
            }),
          });

          if (response.ok) {
            setStep(3);
            setShowErrors(false);
          } else {
            throw new Error("Failed to submit form");
          }
        } catch (error) {
          console.error("Error submitting form:", error);
          // You might want to show an error message to the user here
        } finally {
          setIsSubmitting(false);
        }
      }
    } else if (step === 3) {
      onClose();
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (showErrors) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4"
      >
        <motion.div layout className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-left">
            Get A Budget Estimate
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 ml-4"
          >
            ✕
          </button>
        </motion.div>

        <form onSubmit={handleSubmit} className="text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
              className="space-y-4"
            >
              {step === 1 && (
                <>
                  <motion.div layout>
                    <label className="block text-gray-700 mb-2 text-left">
                      What type of space are you looking to transform?
                    </label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() =>
                          handleInputChange("projectType", "residential")
                        }
                        className={`flex-1 p-3 rounded border ${
                          formData.projectType === "residential"
                            ? "border-primary bg-primary text-white"
                            : "border-gray-300"
                        }`}
                      >
                        Home
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          handleInputChange("projectType", "commercial")
                        }
                        className={`flex-1 p-3 rounded border ${
                          formData.projectType === "commercial"
                            ? "border-primary bg-primary text-white"
                            : "border-gray-300"
                        }`}
                      >
                        Office/Commercial
                      </button>
                    </div>
                  </motion.div>

                  <motion.div layout className="flex flex-col justify-start">
                    <label className="block text-gray-700 mb-2 text-left">
                      What is the total area of your space?
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={formData.area}
                      onChange={(e) =>
                        handleInputChange(
                          "area",
                          e.target.value.replace(/[^0-9]/g, "")
                        )
                      }
                      className={`w-full p-3 border rounded ${
                        showErrors && errors.area
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      placeholder="Enter area in square feet"
                      required
                    />
                    <AnimatePresence>
                      {showErrors && errors.area && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-red-500 text-sm mt-2 text-left"
                        >
                          {errors.area}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.button
                    layout
                    type="submit"
                    disabled={!formData.projectType || !formData.area}
                    className="w-full bg-primary text-white py-3 rounded disabled:opacity-50 mt-6"
                  >
                    Continue
                  </motion.button>
                </>
              )}

              {step === 2 && (
                <>
                  <motion.div
                    layout
                    className="flex flex-col justify-start text-left"
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      Almost there!
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Please share your details to view your approximate budget.
                    </p>

                    <motion.div layout className="mb-4">
                      <label className="block text-gray-700 mb-2 text-left">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="w-full p-3 border border-gray-300 rounded"
                        placeholder="Enter your name"
                        required
                      />
                    </motion.div>

                    <motion.div layout className="mb-6">
                      <label className="block text-gray-700 mb-2 text-left">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange(
                            "phone",
                            e.target.value.replace(/[^0-9]/g, "")
                          )
                        }
                        className={`w-full p-3 border rounded ${
                          showErrors && errors.phone
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        placeholder="Enter your phone number"
                        maxLength={10}
                        required
                      />
                      <AnimatePresence>
                        {showErrors && errors.phone && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-red-500 text-sm mt-2 text-left"
                          >
                            {errors.phone}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <motion.button
                      layout
                      type="submit"
                      disabled={
                        !formData.name || !formData.phone || isSubmitting
                      }
                      className="w-full bg-primary text-white py-3 rounded disabled:opacity-50"
                    >
                      {isSubmitting ? "Calculating..." : "Get Estimate"}
                    </motion.button>
                  </motion.div>
                </>
              )}

              {step === 3 && (
                <>
                  <motion.div layout>
                    <h3 className="text-xl font-semibold mb-4">
                      Your Budget Estimate
                    </h3>
                    <motion.div
                      layout
                      className="bg-gray-50 p-6 rounded-lg mb-6"
                    >
                      <p className="text-center text-2xl font-bold text-primary">
                        ₹{budgetRange?.min.toLocaleString()} onwards
                      </p>
                      <p className="text-center text-gray-600 mt-2">
                        For your {formData.area} sq ft {formData.projectType}{" "}
                        space
                      </p>
                    </motion.div>

                    <motion.div
                      layout
                      className="text-left text-sm text-gray-600 space-y-2"
                    >
                      <p className="font-medium">Important Note:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          This is an approximate price range and should not be
                          considered as final costing
                        </li>
                        <li>
                          Costing will highly depend on various factors like
                          actual scope of work, client requirements, choice of
                          materials and finishes, etc
                        </li>
                        <li>
                          Detailed estimate can be provided only post design
                          finalization
                        </li>
                      </ul>
                    </motion.div>

                    <motion.button
                      layout
                      type="button"
                      onClick={onClose}
                      className="w-full bg-primary text-white py-3 rounded mt-6"
                    >
                      Close
                    </motion.button>
                  </motion.div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </form>
      </motion.div>
    </div>
  );
}
