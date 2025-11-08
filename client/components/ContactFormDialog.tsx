import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ContactFormDialog({
  open,
  onOpenChange,
}: ContactFormDialogProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    userType: "individual" as "individual" | "brand" | "creator",
    tiktokUrl: "",
    tiktokShopLink: "",
    instagramUrl: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      userType: "individual",
      tiktokUrl: "",
      tiktokShopLink: "",
      instagramUrl: "",
    });
    setIsSubmitting(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-black border-2 border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle
            className="text-3xl font-bold mb-2"
            style={{
              fontFamily: "Signord, sans-serif",
              background:
                "linear-gradient(135deg, #FF0050 0%, #FF1A66 15%, #EE2A7B 30%, #69C9D0 50%, #00F2EA 65%, #00D4FF 80%, #0099FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
            }}
          >
            Let's Talk
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Fill out the form below and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* You Are Field */}
          <div className="space-y-2">
            <Label className="text-gray-300">You are *</Label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, userType: "individual" }))
                }
                className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  formData.userType === "individual"
                    ? "text-white font-bold"
                    : "bg-gray-900 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600"
                }`}
                style={
                  formData.userType === "individual"
                    ? {
                        background:
                          "linear-gradient(to right, #FF0050 0%, #FF1A66 14%, #EE2A7B 28%, #69C9D0 42%, #00F2EA 57%, #00D4FF 71%, #0099FF 100%)",
                      }
                    : {}
                }
              >
                Individual
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, userType: "creator" }))
                }
                className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  formData.userType === "creator"
                    ? "text-white font-bold"
                    : "bg-gray-900 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600"
                }`}
                style={
                  formData.userType === "creator"
                    ? {
                        background:
                          "linear-gradient(to right, #FF0050 0%, #FF1A66 14%, #EE2A7B 28%, #69C9D0 42%, #00F2EA 57%, #00D4FF 71%, #0099FF 100%)",
                      }
                    : {}
                }
              >
                Creator
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, userType: "brand" }))
                }
                className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  formData.userType === "brand"
                    ? "text-white font-bold"
                    : "bg-gray-900 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-600"
                }`}
                style={
                  formData.userType === "brand"
                    ? {
                        background:
                          "linear-gradient(to right, #FF0050 0%, #FF1A66 14%, #EE2A7B 28%, #69C9D0 42%, #00F2EA 57%, #00D4FF 71%, #0099FF 100%)",
                      }
                    : {}
                }
              >
                Brand
              </button>
            </div>
          </div>

          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300">
              Name *
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-900 border-gray-700 text-white focus:border-[#00F2EA] focus:ring-[#00F2EA] transition-colors"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-900 border-gray-700 text-white focus:border-[#00F2EA] focus:ring-[#00F2EA] transition-colors"
              placeholder="your@email.com"
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-300">
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="bg-gray-900 border-gray-700 text-white focus:border-[#00F2EA] focus:ring-[#00F2EA] transition-colors"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          {/* Conditional Fields based on userType */}
          {formData.userType === "creator" ? (
            <>
              {/* TikTok URL Field */}
              <div className="space-y-2">
                <Label htmlFor="tiktokUrl" className="text-gray-300">
                  TikTok URL
                </Label>
                <Input
                  id="tiktokUrl"
                  name="tiktokUrl"
                  type="url"
                  value={formData.tiktokUrl}
                  onChange={handleChange}
                  className="bg-gray-900 border-gray-700 text-white focus:border-[#00F2EA] focus:ring-[#00F2EA] transition-colors"
                  placeholder="https://tiktok.com/@username"
                />
              </div>
            </>
          ) : formData.userType === "brand" ? (
            /* TikTok Shop Link - Only for Brand */
            <div className="space-y-2">
              <Label htmlFor="tiktokShopLink" className="text-gray-300">
                TikTok Shop Link
              </Label>
              <Input
                id="tiktokShopLink"
                name="tiktokShopLink"
                type="url"
                value={formData.tiktokShopLink}
                onChange={handleChange}
                className="bg-gray-900 border-gray-700 text-white focus:border-[#00F2EA] focus:ring-[#00F2EA] transition-colors"
                placeholder="https://shop.tiktok.com/..."
              />
            </div>
          ) : (
            /* Company Field - Only for Individual */
            <div className="space-y-2">
              <Label htmlFor="company" className="text-gray-300">
                Company
              </Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="bg-gray-900 border-gray-700 text-white focus:border-[#00F2EA] focus:ring-[#00F2EA] transition-colors"
                placeholder="Your company name"
              />
            </div>
          )}

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-300">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="bg-gray-900 border-gray-700 text-white focus:border-[#00F2EA] focus:ring-[#00F2EA] transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 bg-transparent border-gray-700 text-white hover:bg-gray-900 hover:text-white transition-colors"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 text-white font-bold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background:
                  "linear-gradient(to right, #FF0050 0%, #FF1A66 14%, #EE2A7B 28%, #69C9D0 42%, #00F2EA 57%, #00D4FF 71%, #0099FF 100%)",
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
