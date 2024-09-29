/*
  Warnings:

  - Added the required column `direction` to the `fleet_invitations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `fleet_invitations` ADD COLUMN `direction` VARCHAR(191) NOT NULL;
