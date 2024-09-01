import { createFileRoute, Link } from '@tanstack/react-router'
import React, { useState, useRef } from "react";
import {
  ChevronRight,
  User,
  MapPin,
  FileText,
  Link as LinkIcon,
  UserCircle,
  Camera,
  CalendarIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date | undefined;
  city: string;
  state: string;
  zipCode: string;
  idType: string;
  idNumber: string;
  idDocument: File | null;
  socialMediaLinks: string;
  websiteLinks: string;
  phoneNumber: string;
  username: string;
  profilePicture: File | null;
  termsConsent: boolean;
}

export const Route = createFileRoute('/_layout/onboarding/creator')({
  component: OnboardingPage
})

const steps = [
  {
    icon: User,
    title: "Your details",
    description: "Please provide your name and email",
  },
  { icon: MapPin, title: "Location", description: "Where are you based?" },
  {
    icon: FileText,
    title: "Identification",
    description: "Verify your identity",
  },
  {
    icon: LinkIcon,
    title: "Additional info",
    description: "Add your social and contact details",
  },
  {
    icon: UserCircle,
    title: "Profile completion",
    description: "Set up your creator profile",
  },
];

const keywords: string[] = [
  "Community",
  "Connect",
  "Interactive",
  "Influencer",
  "Personalization",
  "Explore",
  "Premium",
  "Audience",
  "Comedy",
  "Exclusive",
  "discover",
  "Freedom",
  "Experiences",
  "Access",
  "Exclusive Content",
  "Support",
  "Talks",
  "Loyal Followers",
  "Top Supporters",
  "Collabs",
  "Personalized",
  "Feeds",
  "Tips",
  "Watch",
  "Fans",
];

const Keyword: React.FC<{ word: string; index: number }> = ({
  word,
  index,
}) => (
  <span
    key={index}
    className="text-white opacity-1 mix-blend-overlay font-bold px-2 py-1 m-1 select-none"
    style={{
      fontSize: `${Math.random() * (2.5 - 0.25) + 0.5}rem`,
      transform: `rotate(${Math.random() * 60 - 30}deg)`,
    }}
  >
    {word}
  </span>
);

function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: undefined,
    city: "",
    state: "",
    zipCode: "",
    idType: "",
    idNumber: "",
    idDocument: null,
    socialMediaLinks: "",
    websiteLinks: "",
    phoneNumber: "",
    username: "",
    profilePicture: null,
    termsConsent: false,
  });

  const profilePicInputRef = useRef<HTMLInputElement>(null);
  const idDocInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const fileInput = e.target as HTMLInputElement;
      const file = fileInput.files?.[0];
      setFormData((prev) => ({ ...prev, [name]: file || null }));
    } else if (type === "checkbox") {
      const checkboxInput = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checkboxInput.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleProfilePicButtonClick = () => {
    profilePicInputRef.current?.click();
  };

  const handleIdDocButtonClick = () => {
    idDocInputRef.current?.click();
  };

  const handleDateOfBirthChange = (date: Date | undefined) => {
    setFormData((prev) => ({ ...prev, dateOfBirth: date }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 0));

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <Input
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="rounded-full py-6"
              required
            />
            <Input
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="rounded-full py-6"
              required
            />
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-full py-6"
              required
            />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal rounded-full py-6",
                    !formData.dateOfBirth && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.dateOfBirth ? (
                    format(formData.dateOfBirth, "PPP")
                  ) : (
                    <span>Date of Birth</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={formData.dateOfBirth}
                  onSelect={handleDateOfBirthChange}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </>
        );
      case 1:
        return (
          <>
            <Input
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="rounded-full py-6"
              required
            />
            <Input
              placeholder="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="rounded-full py-6"
              required
            />
            <Input
              placeholder="Zip Code"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="rounded-full py-6"
              required
            />
          </>
        );
      case 2:
        return (
          <>
            <Select
              name="idType"
              value={formData.idType}
              onValueChange={(value) =>
                handleChange({ target: { name: "idType", value } } as any)
              }
            >
              <SelectTrigger className="rounded-full py-6">
                <SelectValue placeholder="Select ID Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="stateID">State ID</SelectItem>
                <SelectItem value="driversLicense">
                  Driver&#39;s License
                </SelectItem>
                <SelectItem value="passport">Passport</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="ID Number"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
              className="rounded-full py-6"
              required
            />
            <div className="relative">
              <Input
                ref={idDocInputRef}
                type="file"
                name="idDocument"
                onChange={handleChange}
                className="hidden"
                id="idDocument"
                required
              />
              <Button
                type="button"
                variant="outline"
                className="w-full rounded-full py-6 text-left font-normal"
                onClick={handleIdDocButtonClick}
              >
                <FileText className="mr-2 h-4 w-4" />
                {formData.idDocument
                  ? formData.idDocument.name
                  : "Upload ID Document"}
              </Button>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <Input
              placeholder="Social Media Links"
              name="socialMediaLinks"
              value={formData.socialMediaLinks}
              onChange={handleChange}
              className="rounded-full py-6"
            />
            <Input
              placeholder="Website Links"
              name="websiteLinks"
              value={formData.websiteLinks}
              onChange={handleChange}
              className="rounded-full py-6"
            />
            <Input
              placeholder="Phone Number"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="rounded-full py-6"
              required
            />
          </>
        );
      case 4:
        return (
          <>
            <div className="flex flex-col items-center mb-4">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden mb-4">
                {formData.profilePicture ? (
                  <img
                    src={URL.createObjectURL(formData.profilePicture)}
                    width="96"
                    height="96"
                    alt="Profile Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Camera className="text-gray-400" size={48} />
                )}
              </div>
              <Button
                type="button"
                variant="outline"
                className="rounded-full"
                onClick={handleProfilePicButtonClick}
              >
                <Camera className="mr-2 h-4 w-4" />
                {formData.profilePicture ? "Change Picture" : "Upload Picture"}
              </Button>
              <Input
                ref={profilePicInputRef}
                id="profilePicture"
                name="profilePicture"
                type="file"
                onChange={handleChange}
                className="hidden"
                accept="image/*"
              />
            </div>
            <Input
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="rounded-full py-6"
              required
            />
            <div className="flex items-center space-x-2">
              <Checkbox
                id="termsConsent"
                name="termsConsent"
                checked={formData.termsConsent}
                onCheckedChange={(checked) =>
                  handleChange({
                    target: { name: "termsConsent", type: "checkbox", checked },
                  } as any)
                }
              />
              <label
                htmlFor="termsConsent"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <a href="#" className="text-cyan-500 font-bold">
                  Terms of Service
                </a>
              </label>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full min-h-screen h-full grid place-items-center p-28 snap-start snap-always">
      <div className="w-full max-w-[80vh] rounded-3xl overflow-hidden bg-white">
        <div className="grid grid-cols-1 z-20">
          <div className="relative p-8 md:p-16 grid gap-6">
            <div className="flex justify-center">
              <img
                src="/stroli_logo_icon.svg"
                width="64"
                height="64"
                alt="Logo Icon"
              />
              <img
                src="/stroli_logo.svg"
                width="128"
                height="64"
                alt="Logo"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl text-gray-700 font-extrabold uppercase text-center">
                {steps[currentStep].title}
              </h2>
              <p className="text-gray-700 font-bold text-center">
                {steps[currentStep].description}
              </p>
            </div>
            <form className="grid gap-6" onSubmit={handleSubmit}>
              <div className="grid gap-4">{renderStepContent()}</div>
              <div className="flex justify-between">
                {currentStep > 0 && (
                  <Button
                    onClick={prevStep}
                    variant="outline"
                    className="rounded-full"
                  >
                    Back
                  </Button>
                )}
                {currentStep < steps.length - 1 ? (
                  <Button
                    onClick={nextStep}
                    className="rounded-full bg-primary text-white ml-auto"
                  >
                    Continue <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="rounded-full bg-primary text-white ml-auto"
                  >
                    Complete Registration
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-wrap justify-center items-center bg-gradient-to-r from-cyan-500 via-cyan-300 to-sky-300 p-4 overflow-hidden -z-[1]">
        {[...keywords, ...keywords].map((word, index) => (
          <Keyword key={index} word={word} index={index} />
        ))}
      </div>
    </div>
  );
};
