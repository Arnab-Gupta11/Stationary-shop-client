"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub } from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";

export type TSidbarItem = {
  title: string;
  url?: string;
  icon: LucideIcon;
  show: boolean;
  isActive?: boolean | undefined;
  items?:
    | {
        title: string;
        url: string;
      }[]
    | undefined;
}[];

export function NavMain({ items }: { items: TSidbarItem }) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          return (
            item?.show && (
              <Collapsible key={item.title} asChild defaultOpen={item.isActive} className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    {item?.items ? (
                      <SidebarMenuButton
                        tooltip={item.title}
                        className="text-light-primary-text dark:text-dark-primary-txt font-medium hover:text-primary"
                      >
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    ) : (
                      <SidebarMenuButton tooltip={item.title} className="">
                        {item?.url && (
                          <NavLink
                            to={item.url}
                            className={({ isActive }) =>
                              isActive
                                ? "text-primary font-medium flex items-center gap-2"
                                : "flex items-center gap-2 text-light-primary-text dark:text-dark-primary-txt font-medium hover:text-primary"
                            }
                          >
                            {item.icon && <item.icon className="w-4 h-4" />}
                            <span>{item.title}</span>
                          </NavLink>
                        )}
                      </SidebarMenuButton>
                    )}
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items?.map((subItem, idx) => (
                            <NavLink
                              key={idx}
                              to={subItem.url}
                              className={({ isActive }) =>
                                isActive
                                  ? "text-primary font-medium"
                                  : " text-light-primary-text dark:text-dark-primary-txt text-sm font-medium hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 hover:py-1 hover:px-2 rounded-xl transition-all duration-500 hover:text-primary dark:hover:text-primary active:px-0 active:bg-none"
                              }
                            >
                              {/* <SidebarMenuSubButton asChild> */}
                              <div className="justify-start rounded-lg flex items-center gap-1.5">
                                <VscDebugBreakpointLogUnverified />
                                <span>{subItem.title}</span>
                              </div>
                              {/* </SidebarMenuSubButton> */}
                            </NavLink>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            )
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
