import {
  getAllNotesHandler,
  getNoteByIdHandler,
  addNoteHandler,
} from './handler.js';

const routes = [
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
];

export default routes;
