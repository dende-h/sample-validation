// src/components/ValidationTextField/index.tsx

import { FormControl, TextField, TextFieldProps } from '@mui/material'
import { Control, Controller, FieldErrors, FieldValues, Path } from 'react-hook-form'

// このタイプは、ValidationTextFieldコンポーネントのプロパティを定義します。
type ValdarionTextFieldProps<T extends FieldValues> = {
  name: Path<T>
  helperText?: string
  control: Control<any>
  errors: FieldErrors<any>
} & TextFieldProps

export const ValidationTextField = <T extends FieldValues>({
  name,
  control,
  helperText,
  errors,
  ...rest
}: ValdarionTextFieldProps<T>) => {
  return (
    <Controller
      name={name} // フォーム内のフィールド名
      control={control} // react-hook-formのcontrolオブジェクト
      render={({ field }) => (
        <FormControl>
          <TextField
            name={field.name} // フィールド名
            value={field.value} // フィールドの値
            onChange={field.onChange} // 値が変更されたときのハンドラ
            onBlur={field.onBlur} // フォーカスが外れたときのハンドラ
            inputRef={field.ref} // フィールドへの参照
            disabled={field.disabled} // 無効化されているかどうか
            helperText={helperText} // 追加のヘルパーテキスト
            error={!!errors[name]} // エラーがあるかどうか
            {...rest} // その他のTextFieldプロパティ
          />
        </FormControl>
      )}
    />
  )
}
