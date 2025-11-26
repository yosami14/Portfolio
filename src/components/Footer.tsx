export default function Footer() {
  return (
    <footer className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Samuel Yohannes. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Designed & built with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
