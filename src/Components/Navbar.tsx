"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Link from "next/link"

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div className={cn("top-8 mt-6 inset-x-0 max-w-7xl mx-auto z-20", className)}> {/* Adjusted top margin to top-8 */}
            <BackgroundGradient className="rounded-md p-4 bg-white dark:bg-zinc-900 text-lg font-semibold">
                <Menu setActive={setActive}>
                    <MenuItem setActive={setActive} active={active} item="Menu">
                        <div className="flex space-x-4">
                            <HoveredLink href="/">Home</HoveredLink>
                            <HoveredLink href="/Register">Register</HoveredLink>
                            <HoveredLink href="/sign">Sign in</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Shopping">
                        <div className="flex space-x-4">
                        <HoveredLink href="/Garements">Garements</HoveredLink>
                        <HoveredLink href="/groceries">Groceries</HoveredLink>
                        <HoveredLink href="/electricals">Electrical Products</HoveredLink>
                        </div>
                    </MenuItem>
                    <MenuItem setActive={setActive} active={active} item="Account">
                        <div className="flex space-x-4">
                            <HoveredLink href="/profile">Profile</HoveredLink>
                            <HoveredLink href="/settings">Settings</HoveredLink>
                            <HoveredLink href="/logout">Logout</HoveredLink>
                        </div>
                    </MenuItem>
                </Menu>
            </BackgroundGradient>
        </div>
    )
}

export default Navbar
