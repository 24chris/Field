-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "choice" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "university" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "college" TEXT NOT NULL,
    "sdepart" TEXT NOT NULL,
    "telno" TEXT NOT NULL,
    "cfield" TEXT NOT NULL,
    "specify" TEXT NOT NULL,
    "depart" TEXT NOT NULL,
    "yos" TEXT NOT NULL,
    "regno" TEXT NOT NULL,
    "residence" TEXT NOT NULL,
    "guardname" TEXT NOT NULL,
    "stelno" TEXT NOT NULL,
    "inletter" TEXT NOT NULL,
    "inID" TEXT NOT NULL,
    "cat" TEXT NOT NULL,
    "con" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_regno_key" ON "Student"("regno");
