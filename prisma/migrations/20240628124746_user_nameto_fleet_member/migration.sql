/*
  Warnings:

  - Added the required column `userName` to the `fleet_members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `fleet_members` ADD COLUMN `userName` VARCHAR(191) NOT NULL;
