import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import { useToast } from "@/components/ui/use-toast";

const fetchPedidos = async () => {
    const { data } = await axios.get('http://localhost:8090/orders');
    return data;
};

const updateStatus = async ({ id, status }) => {
    await axios.put(`http://localhost:8090/orders/${id}/status/${status}`);
};

const statusColor = {
    em_andamento: 'bg-yellow-100 text-yellow-800',
    a_caminho: 'bg-blue-100 text-blue-800',
    entregue: 'bg-green-100 text-green-800',
};

export default function AdminPedidosPage() {
    const queryClient = useQueryClient();
    const { data: pedidos, isLoading } = useQuery({
        queryKey: ['pedidos'],
        queryFn: fetchPedidos,
    });

    const mutation = useMutation({
        mutationFn: updateStatus,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['pedidos'] });
        },
    });

    if (isLoading) return <p className="p-4">Carregando pedidos...</p>;

    return (
        <div className="p-6 grid gap-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">Painel de Pedidos</h1>
            {pedidos.map((pedido) => (
                <Card key={pedido.id} className="shadow-md rounded-2xl">
                    <CardContent className="p-6 space-y-4">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-lg font-semibold">{pedido.client}</p>
                                <p className="text-sm text-gray-500">{pedido.phoneNumber}</p>
                            </div>
                            <span className={`text-sm px-3 py-1 rounded-full font-medium ${statusColor[pedido.status]}`}>
                                {pedido.status.replace('_', ' ')}
                            </span>
                        </div>

                        <div className="text-sm text-gray-700">
                            <p><strong>Endereço:</strong> {pedido.street}, {pedido.number} - {pedido.neighborhood}</p>
                        </div>
                        <div className='text-sm text-gray-700'>
                            <p><strong>Metodo de pagamento:</strong> {pedido.methodPayment}</p>
                            {pedido.methodPayment === "dinheiro" &&(
                                <p><strong>Troco para:</strong> {pedido.change[0].changeValue}</p>
                            )}
                        </div>

                        <div>
                            <p className="font-medium">Itens do Pedido:</p>
                            <ul className="list-disc list-inside text-sm text-gray-800 ml-2">
                                {pedido.items.map((item, idx) => (
                                    <li key={idx}>{item.name} (x{item.quantity})</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold">Valor total:</p>
                            <p className="text-lg font-medium text-gray-800">R$ {pedido.totalPrice}</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">Atualizar status:</span>
                            <Select
                                value={pedido.status}
                                onValueChange={(value) => mutation.mutate({ id: pedido.id, status: value })}
                            >
                                <SelectTrigger className="w-[180px]" />
                                <SelectContent>
                                    <SelectItem value="em_andamento">Em andamento</SelectItem>
                                    <SelectItem value="a_caminho">A caminho</SelectItem>
                                    <SelectItem value="entregue">Entregue</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}