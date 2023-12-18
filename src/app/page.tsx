// app/page.tsx

'use client'

import { CheckExistEmail } from '@/components/CheckExistEmail'
import React from 'react'


// CheckExistEmailPageは、メールアドレスチェックのための専用ページを定義するコンポーネントです。
const CheckExistEmailPage = () => {
  // CheckExistEmailコンポーネントをレンダリングします。
  // このコンポーネントは、ユーザーがメールアドレスを入力し、バリデーションを行うためのインターフェースを提供します。
  return <CheckExistEmail />
}

export default CheckExistEmailPage