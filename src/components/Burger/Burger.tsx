import styles from './Burger.module.scss'
import type { RootState } from '../../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { toggleState } from '../../../slices/burgerMenuSlice'

const Burger = () => {
	const burgerValue = useSelector((state: RootState) => state.burgerMenu.active)
  const dispatch = useDispatch()

	return (
		<div
			className={`${styles.element} ${burgerValue ? styles.active : ''} Burger`}
			onClick={() => {
				dispatch(toggleState())
			}}
		>
			<span></span>
			<span></span>
		</div>
	)
}

export { Burger }