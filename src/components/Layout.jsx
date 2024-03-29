import Header from "./Header";

// eslint-disable-next-line react/prop-types
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
