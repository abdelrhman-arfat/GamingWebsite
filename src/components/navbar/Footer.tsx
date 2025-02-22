const Footer = () => {
  return (
    <div className="w-full h-32 flex flex-col items-center justify-center">
      <p>
        &copy; {new Date().getFullYear()} Gaming Website. All rights reserved.
      </p>
      <p>Powered by React</p>
    </div>
  );
};

export default Footer;
