// src/constants/emailMatchSchema.ts

import { z } from 'zod'

// 正規表現を使用して、有効な文字だけを含む文字列を定義します。
const pattern = /^[\u0021-\u007e]+$/u

// emailMatchSchemaは、メールアドレスのバリデーションルールを定義するオブジェクトです。
export const emailMatchSchema = {
  schema: z.object({
    email: z
      .string()
      .nonempty('メールアドレスが入力されていません。') //入力必須バリデーション
      .email('正しいメールアドレスを入力してください。') // メールアドレス形式のバリデーション
      .regex(pattern) // 追加の正規表現によるバリデーション
  }),
  defaultValues: { email: '' }, // フォームのデフォルト値
  names: { email: 'email' } // フォームフィールドの名前
}

