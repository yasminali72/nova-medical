"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTranslations } from "next-intl";
import {
  Send,
  CheckCircle,
  Loader2,
  AlertCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export function ContactForm() {
  const t = useTranslations("contact");
  const common = useTranslations("common");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contactSchema = z.object({
    name: z.string().min(2, { message: t("errors.nameMin") }),
    email: z.string().email({ message: t("errors.emailInvalid") }),
    phone: z.string().min(7, { message: t("errors.phoneMin") }),
    subject: z.string().min(1, { message: t("errors.subjectRequired") }),
    message: z.string().min(10, { message: t("errors.messageMin") }),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: "General",
    },
  });

  const onSubmit = async (_data: ContactFormData) => {
    setIsLoading(true);
    // Simulate brief network submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsLoading(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="rounded-3xl bg-card border border-border/90 p-8 sm:p-10 shadow-xl shadow-primary/5">
      {isSubmitted ? (
        <div className="py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-foreground font-heading">
            {t("successTitle")}
          </h3>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            {t("successDesc")}
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 px-6 py-2.5 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            {t("sendAnother")}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-foreground font-heading">
              {t("formTitle")}
            </h3>
            <p className="text-sm text-muted-foreground">{t("formSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {t("nameLabel")}
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder={t("namePlaceholder")}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-sm transition-all"
              />
              {errors.name && (
                <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name.message}</span>
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {t("emailLabel")}
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder={t("emailPlaceholder")}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-sm transition-all"
              />
              {errors.email && (
                <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email.message}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Phone */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {t("phoneLabel")}
              </label>
              <input
                type="tel"
                dir="ltr"
                {...register("phone")}
                placeholder={t("phonePlaceholder")}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-sm transition-all"
              />
              {errors.phone && (
                <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.phone.message}</span>
                </p>
              )}
            </div>

            {/* Department */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {t("subjectLabel")}
              </label>
              <select
                {...register("subject")}
                className="w-full px-4 py-3 rounded-xl border border-input bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-sm transition-all"
              >
                <option value="General">{t("subjectGeneral")}</option>
                <option value="Cardiology">{t("subjectCardiology")}</option>
                <option value="Dermatology">{t("subjectDermatology")}</option>
                <option value="Pediatrics">{t("subjectPediatrics")}</option>
                <option value="Dentistry">{t("subjectDentistry")}</option>
                <option value="Orthopedics">{t("subjectOrtho")}</option>
                <option value="Internal">{t("subjectInternal")}</option>
              </select>
              {errors.subject && (
                <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.subject.message}</span>
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-foreground">
              {t("messageLabel")}
            </label>
            <textarea
              rows={4}
              {...register("message")}
              placeholder={t("messagePlaceholder")}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background/50 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-sm transition-all resize-none"
            />
            {errors.message && (
              <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.message.message}</span>
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-6 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-95 shadow-md shadow-primary/20 transition-all active:scale-[0.99] disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{t("submitting")}</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>{t("submitBtn")}</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
