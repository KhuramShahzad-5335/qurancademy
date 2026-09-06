export default function GoogleMap() {
  return (
    <div className="w-full h-96 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900">
      <iframe
        title="Qurancademy Location Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6806.366763541592!2d74.30532898913562!3d31.46414126432159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1788627775956!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}