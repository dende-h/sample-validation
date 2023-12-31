// src/components/CheckExistEmail/index.tsx

import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useInputForm } from '@/hooks/UseInputForm/hook'
import { z } from 'zod'
import { emailMatchSchema } from '@/constants/emailMatchSchema'
import { ValidationTextField } from '../ValidationTextField'

// サンプルメールアドレス
const sampleEmail = 'example@example.com'

export const CheckExistEmail = () => {

  // emailMatchSchemaからスキーマ、デフォルト値、フィールド名を取得します。
  const { schema, defaultValues, names } = emailMatchSchema

  // カスタムフックuseInputFormを使用して、フォームの状態管理とバリデーションを行います。
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError
  } = useInputForm({ schema, defaultValues, mode: 'onBlur' })

  // エラーメッセージを取得します。
  const errorMessage = errors.email?.message as string

  // フォームの送信時の処理を定義します。
  const onSubmit = (data: z.infer<typeof schema>) => {
    // 入力されたメールアドレスがサンプルと一致しない場合、エラーを設定します。
    if (data.email !== sampleEmail) {
      setError('email', {
        type: 'manual',
        message: 'メールアドレスが見つかりません'
      })
    } else {
      // 一致する場合は、通常の処理（例：データベース確認、通知など）を行います。
      alert("メールアドレスが一致しました！")
    }
  }


  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} display="flex" flexDirection="column" gap={3} width={600}>
      <Typography variant='h5'>サンプルバリデーションフォーム</Typography>
      <ValidationTextField
        label="メールアドレス"
        name={names.email}
        control={control}
        errors={errors}
        helperText={errorMessage}
        placeholder="メールアドレスを入力してください"
      />
      <Button type="submit" variant="contained">Submit</Button>
    </Box>
  )
}
