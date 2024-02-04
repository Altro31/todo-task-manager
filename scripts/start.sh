#!/bin/sh
npx prisma db push
npm run build
npm run start