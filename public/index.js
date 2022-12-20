import { load } from './binding';

const module = await load();
document.body.innerText = module.add(1, 2);
