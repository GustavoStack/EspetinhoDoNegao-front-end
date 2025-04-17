
// Interface para os itens do pedido
export interface OrderItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

// Interface para o formulário de pedido
export interface OrderForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  orderNotes: string;
}

// Interface completa do pedido
export interface Order {
  orderItems: OrderItem[];
  customerInfo: OrderForm;
  totalPrice: number;
  orderDate: string;
}

// Configurações da API
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

// Serviço para enviar pedidos para o backend Java
export const orderService = {
  // Enviar um novo pedido
  submitOrder: async (order: Order): Promise<{ success: boolean; message: string; orderId?: string }> => {
    try {
      const response = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao enviar o pedido');
      }

      return {
        success: true,
        message: 'Pedido enviado com sucesso!',
        orderId: data.orderId,
      };
    } catch (error) {
      console.error('Erro ao enviar pedido:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Erro desconhecido ao processar o pedido',
      };
    }
  },

  // Obter status de um pedido
  getOrderStatus: async (orderId: string): Promise<{ status: string; estimatedTime?: number }> => {
    try {
      const response = await fetch(`${API_URL}/orders/${orderId}/status`);
      
      if (!response.ok) {
        throw new Error('Erro ao obter status do pedido');
      }

      return await response.json();
    } catch (error) {
      console.error('Erro ao verificar status do pedido:', error);
      throw error;
    }
  }
};

export default orderService;
