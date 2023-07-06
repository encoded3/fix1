import { ProjectIO } from 'scratch-vm';

// Создаем экземпляр объекта ProjectIO
const projectIO = new ProjectIO();

// Функция для сохранения проекта в формате .sb3
const saveProject = async () => {
  await projectIO.saveProjectSb3();
  const projectZip = await projectIO.getZip();
  
  const link = document.createElement('a');
  link.href = URL.createObjectURL(projectZip);
  link.download = 'project.sb3';
  link.click();
};

// Вызываем функцию сохранения при необходимости
saveProject();
