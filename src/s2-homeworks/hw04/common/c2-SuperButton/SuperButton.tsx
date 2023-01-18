import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        color,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    /*const finalClassName = s.button
        + (disabled
            ? ' ' + s.disabled
            : color === 'red'
                ? ' ' + s.red
                : color === 'secondary'
                    ? ' ' + s.secondary
                    : ' ' + s.default
                    + (className ? ' ' + className : '')
        )*/// задачка на смешивание классов

    const finalClassName =`${s.button} ${color==='red' ? s.red : color==='secondary' ? s.secondary : s.default} ${disabled ? s.disabled : ''}`

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
