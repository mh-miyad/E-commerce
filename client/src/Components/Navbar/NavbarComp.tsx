"use client";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
export function NavbarComp() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
          <span className="self-center whitespace-nowrap text-4xl font-bold ">
            Den<span className="text-violet-600">i</span>m
            <span className="text-violet-600">i</span>x
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>My Order</Dropdown.Item>
            <Dropdown.Item>Order Tracking</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link>
            <p className="hover:text-violet-600 cursor-pointer font-normal text-lg uppercase">
              Shop
            </p>
          </Navbar.Link>
          <Navbar.Link>
            <p className="hover:text-violet-600 cursor-pointer font-normal text-lg uppercase">
              New arrivals{" "}
            </p>
          </Navbar.Link>
          <Navbar.Link>
            <p className="hover:text-violet-600 cursor-pointer font-normal text-lg uppercase">
              brands
            </p>
          </Navbar.Link>
          <Navbar.Link>
            <p className="hover:text-violet-600 cursor-pointer font-normal text-lg uppercase">
              on sale
            </p>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
