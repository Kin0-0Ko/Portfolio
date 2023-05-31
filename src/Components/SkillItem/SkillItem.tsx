import React, { FC, useEffect, useState } from 'react';
import styles from './SkillItem.module.sass';
import { log } from 'console';

interface SkillItemProps {
	image: string,
	name: string,
	level: number
}

const SkillItem: FC<SkillItemProps> = ({ image, name, level }) => {
	const [levelArr, setLevelArr] = useState<number[]>([])

	useEffect(() => {
		levelHandler()
	}, [level])


	const levelHandler = () => {
		let arr: number[] = [];

		for (let i = 0; i < 5; i++) {
			i < level ? arr.push(1) : arr.push(0);
		}
		setLevelArr(arr)
	}
	console.log(levelArr);
	
	return (
		<div className={styles.SkillItem} data-testid="SkillItem">

			<img
				src={require(`../../public/${image}.png`)} 
				alt="logo"
				width={100}
				height={100} 
			/>

			<span>{name}</span>

			<span className={styles.SkillItemLevel}>

			{levelArr.map((el, i) =>
				<span className={el ? styles.SkillItemStarBlack : styles.SkillItemStarLight} key={i}>&#9733;</span>
			)}
			</span>

		</div>
	)
};


export default SkillItem;
