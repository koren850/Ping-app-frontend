import { useDispatch, useSelector } from "react-redux";
import { setStats } from '../store/stats.action'
export const useForm = () => {
    const dispatch = useDispatch()
    const input = useSelector((state) => state.statsModule.stats);

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        dispatch(setStats({ ...input, [field]: value }))
    }

    return [
        handleChange,
        input
    ]
}