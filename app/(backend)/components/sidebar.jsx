"use client"

import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
 
export function Sidebar() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Card className="h-[calc(100vh-2rem)] w-full border-r  p-4 shadow-xl shadow-blue-gray-900/5">
      
      <List>
      <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
          
        </ListItem>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Categories
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
               
              <Link href="/admin/category/create" className="text-initial">
             <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                 Insert Category
              </ListItem>
             </Link>
             <Link href="/admin/category/" className="text-initial">
             <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                 Manage Category
              </ListItem>
             </Link>
             
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Products
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
            <Link href="/admin/products/create">
            <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Insert Products
              </ListItem>
            </Link>
              <Link href="/admin/products">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                 Manage Products
              </ListItem>
              </Link>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Orders
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Manage Coupons
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Manage Customers
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
      
    </Card>
  );
}