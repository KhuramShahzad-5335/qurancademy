import { siteConfig } from "@/app/content/site.config";
import LineIcon from "../common/lineIcon";

export default function JourneySteps() {
  return <ol className="journey-steps">{siteConfig.steps.map((step, index) => <li key={step.step} data-reveal><div className="journey-step-marker"><span>{step.step}</span><LineIcon kind={index === 0 ? "message" : index === 1 ? "spark" : "path"} /></div><h3>{step.title}</h3><p>{step.desc}</p></li>)}</ol>;
}
