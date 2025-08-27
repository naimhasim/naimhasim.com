export default function ResumePage() {
  return (
    <div className="fixed inset-0 z-50 bg-white">
      <iframe 
        src="/api/resume" 
        className="w-full h-full border-0"
        title="Resume - Muhamad Naim Bin Hasim"
      />
    </div>
  );
}
