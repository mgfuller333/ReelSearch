/*
  Warnings:

  - Added the required column `fleetType` to the `fleets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `fleets` ADD COLUMN `fleetType` VARCHAR(191) NOT NULL DEFAULT 'private';
