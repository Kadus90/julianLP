import Navbar from '../Navbar/Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-200 dark:bg-cool-gray-900 text-black dark:text-white min-h-screen transition duration-700 ease-in-out">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
