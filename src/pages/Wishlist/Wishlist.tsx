import EmptyState from "@/components/shared/EmptyState";
import PageHeader from "@/components/shared/PageHeader";
import Section from "@/components/shared/Section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { wishlistSelector } from "@/redux/features/wishlist/wishlistSlice";
import { useAppSelector } from "@/redux/hooks";
import { MdFavoriteBorder } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import WishlistCard from "./WishlistCard";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useEffect } from "react";

const Wishlist = () => {
  const wishlist = useAppSelector(wishlistSelector);
  const user = useAppSelector(useCurrentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === "admin") {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <>
      <PageHeader title="Wishlist">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Wishlist</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageHeader>
      <div className="pt-20 pb-28">
        <Section>
          {wishlist?.length === 0 && (
            <EmptyState
              icon={<MdFavoriteBorder className="text-7xl sm:text-[120px] " />}
              title="Your wishlist is currently empty."
              subtitle="Browse our products and add your favorites to keep track of items you love."
              action={
                <Link to="/shop">
                  <Button className="py-2 md:py-6">Continue Shopping</Button>
                </Link>
              }
            />
          )}
          {wishlist?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {wishlist?.map((item) => (
                <WishlistCard key={item._id} product={item} />
              ))}
            </div>
          )}
        </Section>
      </div>
    </>
  );
};

export default Wishlist;
