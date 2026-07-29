import cameraIcon from '../../../assets/camera-icon.svg';
import planIcon from '../../../assets/plan-icon.svg';
import protectionIcon from '../../../assets/protection-icon.svg';
import sensorsIcon from '../../../assets/sensors-icon.svg';
import type { StepIcon } from '../interfaces/steps';

export const stepIcons: Record<StepIcon, string> = {
  camera: cameraIcon,
  plan: planIcon,
  sensor: sensorsIcon,
  protection: protectionIcon,
};
