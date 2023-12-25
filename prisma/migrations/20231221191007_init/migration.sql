/*
  Warnings:

  - A unique constraint covering the columns `[author_id]` on the table `Blog` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Invalidtoken` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `Token` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Blog_author_id_key" ON "Blog"("author_id");

-- CreateIndex
CREATE UNIQUE INDEX "Invalidtoken_user_id_key" ON "Invalidtoken"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Token_user_id_key" ON "Token"("user_id");
