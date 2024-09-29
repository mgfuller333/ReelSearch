-- CreateTable
CREATE TABLE `fleets` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `ownerId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `vehicles` JSON NULL,

    UNIQUE INDEX `fleets_id_key`(`id`),
    UNIQUE INDEX `fleets_name_key`(`name`),
    INDEX `fleets_ownerId_idx`(`ownerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fleet_admins` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `fleetId` VARCHAR(191) NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `fleet_admins_fleetId_idx`(`fleetId`),
    UNIQUE INDEX `fleet_admins_userId_fleetId_key`(`userId`, `fleetId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fleet_members` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `fleetId` VARCHAR(191) NOT NULL,
    `joinedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `fleet_members_fleetId_idx`(`fleetId`),
    UNIQUE INDEX `fleet_members_userId_fleetId_key`(`userId`, `fleetId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fleet_invitations` (
    `id` VARCHAR(191) NOT NULL,
    `senderId` VARCHAR(191) NOT NULL,
    `toId` VARCHAR(191) NOT NULL,
    `fleetId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',

    INDEX `fleet_invitations_senderId_idx`(`senderId`),
    INDEX `fleet_invitations_fleetId_idx`(`fleetId`),
    UNIQUE INDEX `fleet_invitations_toId_fleetId_key`(`toId`, `fleetId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- RenameIndex
ALTER TABLE `accounts` RENAME INDEX `accounts_userId_fkey` TO `accounts_userId_idx`;

-- RenameIndex
ALTER TABLE `posts` RENAME INDEX `posts_authorId_fkey` TO `posts_authorId_idx`;

-- RenameIndex
ALTER TABLE `sessions` RENAME INDEX `sessions_userId_fkey` TO `sessions_userId_idx`;
