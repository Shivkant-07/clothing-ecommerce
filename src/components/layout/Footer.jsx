const Footer = () => {
  return (
    <footer className="border-t border-black/10 bg-black px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-[0.2em]">VELORA</h2>
          <p className="mt-2 text-sm text-white/60">
            Modern fashion, made for you.
          </p>
        </div>

        <p className="text-sm text-white/50">
          © 2026 VELORA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;