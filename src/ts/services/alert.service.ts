import Swal from 'sweetalert2';

class AlertService {
  public showSuccessAlert(title: string): void {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title,
      showConfirmButton: false,
      timer: 800,
    });
  }
}

export default AlertService;
