export const whatsappNumber = "+92 347 1713760";

export function whatsappUrl(message = "Assalamu Alaikum! I would like to arrange a free Quran trial class.") {
  const url = new URL(`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`);
  url.searchParams.set("text", message);
  return url.toString();
}

export interface Enquiry {
  name: string;
  course: string;
  timeZone: string;
  message: string;
}

export function enquiryMessage(enquiry: Enquiry) {
  return [
    "Assalamu Alaikum! I would like to ask about Quran classes.",
    `Parent / learner: ${enquiry.name.trim()}`,
    `Course: ${enquiry.course}`,
    enquiry.timeZone.trim() && `City or time zone: ${enquiry.timeZone.trim()}`,
    enquiry.message.trim() && `Questions: ${enquiry.message.trim()}`,
    "Please confirm teacher availability, the free trial details, and fees before I book.",
  ].filter(Boolean).join("\n");
}
