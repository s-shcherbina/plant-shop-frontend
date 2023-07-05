import { FormControl, Input, InputLabel } from '@mui/material';
import { ChangeEvent, FC, forwardRef, Ref } from 'react';
import { IMaskInput } from 'react-imask';
import { ReactElement } from 'react-imask/dist/mixin';
import { CustomProps, IPhoneProps } from '../types';

const TextMaskCustom = forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref): JSX.Element {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask='+38(#00) 000-00-00'
        definitions={{
          '#': /[0-9]/,
        }}
        inputRef={ref as Ref<ReactElement>}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

const PhoneFormat: FC<IPhoneProps> = ({ values, setValues }): JSX.Element => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <FormControl variant='standard' fullWidth size='small'>
      <InputLabel htmlFor='formatted-text-mask-input'>
        Номер телефону (введіть тільки цифри)
      </InputLabel>
      <Input
        onFocus={() => {
          !values.textmask && setValues({ ...values, textmask: '+38(0' });
        }}
        value={values.textmask}
        onChange={handleChange}
        name='textmask'
        // id='formatted-text-mask-input'
        inputComponent={TextMaskCustom as any}
      />
    </FormControl>
  );
};
export default PhoneFormat;
