const NavItem = ({ label }: { label: string; active: boolean }) => {
  // console.log(active);
  return (
    <>
      <span className=" py-2 text-base font-medium">{label}</span>
    </>
  );
};

export default NavItem;
