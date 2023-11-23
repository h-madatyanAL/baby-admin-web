export default function ({ redirect }) {
  // If the user is not authenticated
  if(!localStorage.getItem('token')) {
    return redirect('/');
  }
}