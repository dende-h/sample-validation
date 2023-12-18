// src/hooks/UseInputForm/hook.tsx

import { zodResolver } from '@hookform/resolvers/zod'
import { DefaultValues, FieldValues, useForm } from 'react-hook-form'
import { ZodSchema, z } from 'zod'

// この型は、useInputFormフックのプロパティを定義します。
type UseInputFormProps<T extends FieldValues> = {
  schema: ZodSchema<T> // Zodによるバリデーションスキーマ
  defaultValues?: DefaultValues<T> // フォームのデフォルト値
  mode?: 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched' | 'all' | undefined // バリデーションモード
}

// useInputFormは、フォームのロジックをカプセル化したカスタムフックです。
export const useInputForm = <T extends FieldValues>({ schema, defaultValues, mode }: UseInputFormProps<T>) => {
  // useFormフックを使用して、フォームの状態とイベントハンドラを管理します。
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError
  } = useForm<z.infer<typeof schema>>({
    mode, // バリデーションモード
    defaultValues, // デフォルト値
    resolver: zodResolver(schema) // Zodを使用したバリデーション
  })

  // カスタムフックは、フォームの状態と関数を返します。
  return {
    control,
    handleSubmit,
    formState: { errors },
    setError
  }
}