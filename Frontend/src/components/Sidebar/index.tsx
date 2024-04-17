"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { PlusCircleOutlined } from "@ant-design/icons";
import { DatePicker as Dp, Space } from "antd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import {
  fetchCategories,
  uploadCategory,
  uploadExpense,
  uploadGoal,
  uploadIncome,
} from "@/api";
import { message } from "antd";
import { useGlobalContext } from "@/context/GlobalContext";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const router = useRouter()

  //const { categories, setCategories } = useGlobalContext();
  const [startDate, setStartDate] = useState(new Date());
  const [categories, setCategories] = useState([]);
  const [selectedCat, setSelectedCat] = useState({
    select: false,
    number: 0,
  });

  useEffect(() => {
    fetchLists();
  }, []);

  const fetchLists = async () => {
    try {
      const res4 = await fetchCategories();
      setCategories(res4);
    } catch (err) {
      console.log(err);
    }
  };

  const [expense, setExpense] = useState({
    description: "",
    amount: 0,
    category: 0,
  });

  const [income, setIncome] = useState({
    description: "",
    amount: 0,
  });

  const [goal, setGoal] = useState({
    description: "",
    amount_expected: 0,
    date_due: null,
  });

  const [category, setCategory] = useState({
    name: "",
  });

  const {
    isOpen: isExpenseOpen,
    onOpen: onExpenseOPen,
    onClose: onExpenseClose,
  } = useDisclosure();
  const {
    isOpen: isIncomeOpen,
    onOpen: onIncomeOPen,
    onClose: onIncomeClose,
  } = useDisclosure();
  const {
    isOpen: isGoalOpen,
    onOpen: onGoalOPen,
    onClose: onGoalClose,
  } = useDisclosure();

  const {
    isOpen: isCategoryOpen,
    onOpen: onCategoryOPen,
    onClose: onCategoryClose,
  } = useDisclosure();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      console.log(categories);

      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  const handleCatUpload = async () => {
    const res = await uploadCategory({ category })
      .then(() => message.success("Success"))
      .catch((err) => message.error("Ooops! Something went wrong"));

    onCategoryClose();
  };

  const handleIncomeUpload = async () => {
    const res = await uploadIncome({ income })
      .then(() => {message.success("Success")})
      .catch((err) => message.error("Ooops! Something went wrong"));

    onIncomeClose();
  };

  const handleUploadExpense = async () => {
    //console.log(expense)

    const res = await uploadExpense({ expense })
      .then(() => message.success("Success"))
      .catch((err) => message.error("Ooops! Something went wrong"));

    onExpenseClose();
  };

  const handleGoalUpload = async () => {
    //console.log(goal);

    const isoDate = startDate.toISOString();

    // Extract only the date part (YYYY-MM-DD) from the ISO string
    const djangoDate = isoDate.split("T")[0];

    setGoal({ ...goal, date_due: djangoDate });

    //console.log(djangoDate)

    const res = await uploadGoal({ goal })
      .then(() => message.success("Success"))
      .catch((err) => message.error("Ooops! Something went wrong"));

    onGoalClose();
  };

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <Image
            width={176}
            height={32}
            src={"/images/images.png"}
            alt="Logo"
            priority
          />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("dashboard")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === "/" ||
                            pathname.includes("dashboard")) &&
                          "bg-graydark dark:bg-meta-4"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
                            fill=""
                          />
                          <path
                            d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
                            fill=""
                          />
                          <path
                            d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
                            fill=""
                          />
                          <path
                            d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
                            fill=""
                          />
                        </svg>
                        Dashboard
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && "rotate-180"
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </Link>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
                          <li>
                            <Link
                              href="/"
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/" && "text-white"
                              }`}
                            >
                              Home
                            </Link>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              <div className="flex w-full flex-row items-center justify-between bg-graydark pr-2 text-white">
                <h2
                  onClick={onExpenseOPen}
                  className="group relative flex cursor-pointer items-center gap-2.5 rounded-sm bg-graydark px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:bg-meta-4 dark:hover:bg-meta-4"
                >
                  Expenses
                </h2>
                <PlusCircleOutlined
                  className="text-xl"
                  onClick={onExpenseOPen}
                  twoToneColor="#eb2f96"
                />
              </div>
              <div className="flex w-full flex-row items-center justify-between bg-graydark pr-2 text-white">
                <h2
                  onClick={onIncomeOPen}
                  className="group relative flex cursor-pointer items-center gap-2.5 rounded-sm bg-graydark px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:bg-meta-4 dark:hover:bg-meta-4"
                >
                  Incomes
                </h2>
                <PlusCircleOutlined
                  className="text-xl"
                  onClick={onIncomeOPen}
                  twoToneColor="#eb2f96"
                />
              </div>
              <div className="flex w-full flex-row items-center justify-between bg-graydark pr-2 text-white">
                <h2
                  onClick={onGoalOPen}
                  className="group relative flex cursor-pointer items-center gap-2.5 rounded-sm bg-graydark px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:bg-meta-4 dark:hover:bg-meta-4"
                >
                  Financial Goal
                </h2>
                <PlusCircleOutlined
                  onClick={onGoalOPen}
                  className="text-xl"
                  twoToneColor="#eb2f96"
                />
              </div>
              <div className="flex w-full flex-row items-center justify-between bg-graydark pr-2 text-white">
                <h2
                  onClick={onCategoryOPen}
                  className="group relative flex cursor-pointer items-center gap-2.5 rounded-sm bg-graydark px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:bg-meta-4 dark:hover:bg-meta-4"
                >
                  Categories
                </h2>
                <PlusCircleOutlined
                  onClick={onCategoryOPen}
                  className="text-xl"
                  twoToneColor="#eb2f96"
                />
              </div>
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>

      <Modal
        isCentered
        onClose={onExpenseClose}
        isOpen={isExpenseOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Expense</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex w-full flex-col space-y-2">
              <input
                value={expense.description}
                onChange={(e) =>
                  setExpense({ ...expense, description: e.target.value })
                }
                className="border-1 w-full rounded-md border-black p-1"
                type="text"
                placeholder="Enter description"
              />
              <input
                value={expense.amount}
                onChange={(e) =>
                  setExpense({ ...expense, amount: e.target.value })
                }
                className="w-full rounded-md p-1"
                type="number"
                placeholder="Enter amount"
              />
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<i class="fa-solid fa-chevron-down"></i>}
                >
                  {selectedCat.select == true
                    ? categories[selectedCat.number].name
                    : `Categories`}
                </MenuButton>
                <MenuList>
                  {categories &&
                    categories.map((cat, index) => (
                      <MenuItem
                        onClick={() => {
                          setSelectedCat({ select: true, number: index });
                          setExpense({ ...expense, category: index });
                        }}
                        key={index}
                      >
                        {cat.name}
                      </MenuItem>
                    ))}
                </MenuList>
              </Menu>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={handleUploadExpense}
              colorScheme="blue"
              variant="ghost"
            >
              Upload
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isCentered
        onClose={onIncomeClose}
        isOpen={isIncomeOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Income</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex w-full flex-col space-y-2">
              <input
                value={income.description}
                onChange={(e) =>
                  setIncome({ ...income, description: e.target.value })
                }
                className="border-1 w-full rounded-md border-black p-1"
                type="text"
                placeholder="Enter description"
              />
              <input
                value={income.amount}
                onChange={(e) =>
                  setIncome({ ...income, amount: e.target.value })
                }
                className="w-full rounded-md p-1"
                type="number"
                placeholder="Enter amount"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={handleIncomeUpload}
              colorScheme="blue"
              variant="ghost"
            >
              Upload
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isCentered
        onClose={onCategoryClose}
        isOpen={isCategoryOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Category</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex w-full flex-col space-y-2">
              <input
                className="border-1 w-full rounded-md border-black p-1"
                value={category.name}
                onChange={(e) =>
                  setCategory({ ...category, name: e.target.value })
                }
                type="text"
                placeholder="Enter name"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={handleCatUpload}
              colorScheme="blue"
              variant="ghost"
            >
              Upload
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isCentered
        onClose={onGoalClose}
        isOpen={isGoalOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Goal</ModalHeader>
          <ModalCloseButton onClick={onGoalClose} />
          <ModalBody>
            <div className="flex w-full flex-col space-y-2">
              <input
                value={goal.description}
                onChange={(e) =>
                  setGoal({ ...goal, description: e.target.value })
                }
                className="border-gray-500 w-full rounded-md border-2 p-1"
                type="text"
                placeholder="Enter description"
              />
              <input
                value={goal.amount_expected}
                onChange={(e) =>
                  setGoal({ ...goal, amount_expected: e.target.value })
                }
                className="border-gray-500 w-full rounded-md border-2 p-1"
                type="number"
                placeholder="Enter amount"
              />
              <span>
                <p>Select Date</p>
                <DatePicker
                  className="border-gray-500 w-full border-2"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </span>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={handleGoalUpload}
              colorScheme="blue"
              variant="ghost"
            >
              Upload
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </aside>
  );
};

export default Sidebar;
