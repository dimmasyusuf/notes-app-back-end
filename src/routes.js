import { getAllNotesHandler, addNoteHandler } from './handler.js';

const routes = [
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
];

export default routes;
