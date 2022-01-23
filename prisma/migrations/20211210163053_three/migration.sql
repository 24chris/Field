-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
-- CreateTable
CREATE TABLE "Student" (
    "university" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "college" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "cField" TEXT NOT NULL,
    "specCource" TEXT NOT NULL,
    "depchoice" TEXT NOT NULL,
    "yearOfStudy" TEXT NOT NULL,
    "regNo" TEXT NOT NULL,
    "residence" TEXT NOT NULL,
    "Guardian" TEXT NOT NULL,
    "gnumber" TEXT NOT NULL,
    "letterUrl" TEXT NOT NULL,
    "uniID" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("regNo")
);
