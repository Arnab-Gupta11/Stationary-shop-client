const NavItem = ({ label }: { label: string; active: boolean }) => {
  return (
    <>
      <span className="font-semibold">{label}</span>
    </>
  );
};

export default NavItem;
