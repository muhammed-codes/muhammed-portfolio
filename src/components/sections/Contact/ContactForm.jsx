import React, { useState } from "react";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import CornerFrame from "../../common/CornerFrame";
import AnnotationStrip from "../../common/AnnotationStrip";
import FormField from "./FormField";
import Button from "../../common/Button";

const ACCESS_KEY = "0c5c5316-e639-4242-9db9-25556bb40ba8";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    discipline: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Valid email address is required";
    }
    if (!formData.message.trim()) {
      errs.message = "Message specification is required";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          discipline: formData.discipline || "General Inquiry",
          message: formData.message,
          subject: `Transmittal from ${formData.name} [Blueprint Portfolio]`,
        }),
      });

      const res = await response.json();
      if (res.success) {
        toast.success("[DISPATCH TRANSMITTED SUCCESSFULLY]", {
          style: {
            background: "var(--color-surface)",
            color: "var(--color-text-primary)",
            border: "1px solid var(--color-border-accent)",
            borderRadius: "2px",
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "12px",
          },
          iconTheme: {
            primary: "var(--color-accent)",
            secondary: "var(--color-accent-fg)",
          },
        });
        setFormData({ name: "", email: "", discipline: "", message: "" });
      } else {
        toast.error("[FAILED TO TRANSMIT DISPATCH]", {
          style: {
            background: "var(--color-surface)",
            color: "var(--color-text-primary)",
            border: "1px solid var(--color-accent)",
            borderRadius: "2px",
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "12px",
          },
        });
      }
    } catch (err) {
      toast.error("[NETWORK TRANSMISSION ERROR]", {
        style: {
          background: "var(--color-surface)",
          color: "var(--color-text-primary)",
          border: "1px solid var(--color-accent)",
          borderRadius: "2px",
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "12px",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CornerFrame className="w-full">
      <div className="bg-surface border border-border flex flex-col">
        <AnnotationStrip
          sheet="TRN-SUB-01"
          scale="1:1"
          discipline="COMMUNICATION"
        />

        <form onSubmit={handleSubmit} className="p-6 md:p-8 flex flex-col gap-5">
          <div className="border-b border-border pb-3">
            <h3 className="font-display text-heading-md text-text-primary uppercase tracking-tight">
              TRANSMITTAL FORM // DIRECT INQUIRY
            </h3>
            <span className="font-mono text-caption text-text-muted uppercase tracking-caption">
              SPEC: SECURE WEB3 DISPATCH PIPELINE
            </span>
          </div>

          <FormField
            label="01. SENDER IDENTITY / NAME"
            name="name"
            placeholder="[Your full name or organization]"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
          />

          <FormField
            label="02. RETURN TRANSMISSION / EMAIL"
            name="email"
            type="email"
            placeholder="[email@organization.com]"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <FormField
            label="03. PROJECT SCOPE / DISCIPLINE (OPTIONAL)"
            name="discipline"
            placeholder="[Full-Stack / Mobile / Backend / Architecture]"
            value={formData.discipline}
            onChange={handleChange}
            required={false}
          />

          <FormField
            label="04. TRANSMITTAL SPECIFICATION / MESSAGE"
            name="message"
            type="textarea"
            rows={5}
            placeholder="[Describe project parameters, milestones, and technical requirements...]"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />

          <Button
            type="submit"
            variant="accent"
            icon={FiSend}
            disabled={isSubmitting}
            className="w-full mt-2"
          >
            {isSubmitting ? "[TRANSMITTING...]" : "[SUBMIT TRANSMITTAL]"}
          </Button>
        </form>
      </div>
    </CornerFrame>
  );
}
