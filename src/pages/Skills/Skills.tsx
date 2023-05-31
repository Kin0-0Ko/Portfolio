import React, { FC } from 'react';
import styles from './Skills.module.sass';
import SkillItem from '../../Components/SkillItem/SkillItem';

interface SkillsProps {}

const Skills: FC<SkillsProps> = () => (
  <div className={styles.Skills} data-testid="Skills">
    		<SkillItem
		image='ReactLogo'
		name='Reac.Js'
		level={2}
		/>
				<SkillItem
		image='ReactLogo'
		name='Reac.Js'
		level={4}
		/>
				<SkillItem
		image='ReactLogo'
		name='Reac.Js'
		level={5}
		/>
  </div>
);

export default Skills;
