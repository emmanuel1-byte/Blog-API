-- DropForeignKey
ALTER TABLE "Blog" DROP CONSTRAINT "Blog_author_id_fkey";

-- DropForeignKey
ALTER TABLE "Invalidtoken" DROP CONSTRAINT "Invalidtoken_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Token" DROP CONSTRAINT "Token_user_id_fkey";

-- AlterTable
ALTER TABLE "Blog" ALTER COLUMN "author_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Invalidtoken" ALTER COLUMN "user_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Token" ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invalidtoken" ADD CONSTRAINT "Invalidtoken_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
