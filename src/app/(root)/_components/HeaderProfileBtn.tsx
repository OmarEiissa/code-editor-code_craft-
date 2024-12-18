"use client";
import LoginButton from "@/components/LoginButton";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";

const HeaderProfileBtn = ({className}: {className?: string}) => {
  return (
    <>
      <SignedIn>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Link
              label="Profile"
              labelIcon={<User className="size-4" />}
              href="/profile"
            />
          </UserButton.MenuItems>
        </UserButton>
      </SignedIn>

      <SignedOut>
        <LoginButton className={className} />
      </SignedOut>
    </>
  );
};

export default HeaderProfileBtn;
